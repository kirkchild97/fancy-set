import { DataGrid, GridActionsCellItem, GridAddIcon, GridColDef, GridRowModes, GridRowModesModel, GridRowsProp } from '@mui/x-data-grid'
import { BattleAction } from '../models/battle-action';
import { useState } from 'react';

const BattleActionFormTableComponent = () => {
  // Current Battle Action being edited
  const [battleAction, setBattleAction] = useState(new BattleAction());

  // Determines the row in which to set for editing
  const rowModesModel: GridRowModesModel = {
    'new': { mode: GridRowModes.Edit, fieldToFocus: 'name' }
  }

  // Should be able to add rows here. Probably use useState hook
  const rows: GridRowsProp = [
    { id: 'new', ...battleAction, actions: () => (<div>Here</div>) },
    { id: 1, name: 'Basic Attack', damage: 20, isMelee: true, range: 5 }
  ];

  // Column Definitions
  const columns: GridColDef[] = [
    { editable: true, field: 'name', headerName: 'Name', type: 'string', description: 'The name of the Battle Action... Duh' },
    { editable: true, field: 'damage', headerName: 'Damage', type: 'number', description: 'The amount of damage a target will take' },
    { editable: true, field: 'isMelee', headerName: 'Is Melee', type: 'boolean', description: 'Determine if the action is melee or ranged based' },
    { editable: true, field: 'range', headerName: 'Range', type: 'number', description: 'How close you need to be to make said attack' },
    { field: 'actions', headerName: 'Actions', type: 'actions', getActions: (p => p.row.id === 'new' ? [<GridActionsCellItem icon={<GridAddIcon />} label="Add" onClick={(e => onActionSubmit(e))} />] : []) }
  ];

  function onActionSubmit(e: any) {
    e.preventDefault();
    console.log('Hitting');
  }
  

  
  return (
    <DataGrid editMode='row'
      rowModesModel={rowModesModel}
      isCellEditable={p => p.row.id === 'new' }
      rows={rows}
      columns={columns} />
  )
};

export default BattleActionFormTableComponent;