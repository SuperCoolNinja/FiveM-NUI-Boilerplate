RegisterNetEvent('nui:receiveCallout')
AddEventHandler('nui:receiveCallout', function(calloutData)
  SendNUIMessage({
    type = 'SHOW_CALLOUT',
    data = calloutData
  })
  SetNuiFocus(true, true)
end)

RegisterNUICallback('acceptCallout', function(data, cb)
  TriggerServerEvent('nui:acceptCallout', data.calloutId)
  SetNuiFocus(false, false)
  cb('ok')
end)

RegisterNUICallback('rejectCallout', function(data, cb)
  SetNuiFocus(false, false)
  cb('ok')
end)
