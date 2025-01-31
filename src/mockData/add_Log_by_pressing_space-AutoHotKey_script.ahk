Space::
  ; Esperar hasta que se suelte la tecla Espacio
  KeyWait, Space, T0.2

  ; Bloquear el teclado y el ratón
  BlockInput, On

  ; Establecer el retraso entre pulsaciones de teclas simuladas
  SetKeyDelay, 200

  Send, {Tab}
  Send, {Tab}
  Send, {Tab}
  Send, {Tab}
  Send, {Enter}

  Send, {Tab}
  Send, {Tab}
  Send, {Tab}
  Send, {Raw}1

  Send, {Tab}
  Send, {Raw}1

  Send, {Tab}
  Send, {Raw}1

  Send, {Enter}

  ; Desbloquear el teclado y el ratón
  BlockInput, Off
return