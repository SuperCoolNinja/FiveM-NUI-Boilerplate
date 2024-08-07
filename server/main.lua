local callouts = {}


--> TODO ADD CONDITION TO CHECK IF THE PLAYER IS IN SERVICE TO RECEIVE CALLOUT :
RegisterCommand('createCall', function(source, args, rawCommand)
  local calloutData = {
    id = #callouts + 1,
    title = args[1] or "Call",
    description = table.concat(args, " ", 2) or "Description du callout",
    coords = GetEntityCoords(GetPlayerPed(source))
  }
  table.insert(callouts, calloutData)
  TriggerClientEvent('nui:receiveCallout', -1, calloutData)
end, false)

RegisterServerEvent('nui:acceptCallout')
AddEventHandler('nui:acceptCallout', function(calloutId)
  local callout = callouts[calloutId]
  if callout then
    TriggerClientEvent('nui:startCallout', source, callout)
  end
end)
