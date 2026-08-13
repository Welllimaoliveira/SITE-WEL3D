#define MyAppName "Weltec3D Gerador de PDF Plantas"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "Weltec3D Solucoes em Detalhamento"
#define MyAppURL "https://weltec3d-site.vercel.app"
#define MyOutputName "Weltec3D_GeradorPDFPlantas_Setup_v1.0.0"

[Setup]
AppId={{2484B9A8-983D-4AD8-AE0D-99A462D4600B}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={userappdata}\pyRevit\Extensions\Weltec3D.extension
DisableDirPage=yes
DisableProgramGroupPage=yes
OutputDir=Output
OutputBaseFilename={#MyOutputName}
Compression=lzma
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=lowest
ArchitecturesInstallIn64BitMode=x64compatible
UninstallDisplayName={#MyAppName}
UninstallDisplayIcon={app}\Weltec3D.tab\Automacao.panel\Gerar PDF Plantas.launcherbutton\icon.png

[Languages]
Name: "brazilianportuguese"; MessagesFile: "compiler:Languages\BrazilianPortuguese.isl"

[Tasks]
Name: "manual"; Description: "Abrir manual de instalacao ao finalizar"; GroupDescription: "Opcoes adicionais:"; Flags: checkedonce

[Files]
Source: "Source\Weltec3D.extension\*"; DestDir: "{userappdata}\pyRevit\Extensions\Weltec3D.extension"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "Manual_Instalacao_Gerador_PDF_Plantas.txt"; DestDir: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\docs"; Flags: ignoreversion

[Icons]
Name: "{autoprograms}\Weltec3D\Manual - Gerador de PDF Plantas"; Filename: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\docs\Manual_Instalacao_Gerador_PDF_Plantas.txt"

[Run]
Filename: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\docs\Manual_Instalacao_Gerador_PDF_Plantas.txt"; Description: "Abrir manual de instalacao"; Flags: postinstall shellexec skipifsilent; Tasks: manual

[UninstallDelete]
Type: filesandordirs; Name: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\Weltec3D.tab\Automacao.panel\Gerar PDF Plantas.launcherbutton"
Type: filesandordirs; Name: "{userappdata}\pyRevit\Extensions\Weltec3D.extension\bin\GeradorPdfPlantas"

