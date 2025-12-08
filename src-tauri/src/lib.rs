use setup::setup;

mod google;
mod setup;

use {
    google::{
        command_get_consent_url::get_consent_url, command_get_profile::get_profile,
        command_get_token::get_token,
    },
    setup::command_start_server::start_server,
    tauri_plugin_log::fern::colors::{Color, ColoredLevelConfig},
};

#[macro_use]
extern crate dotenv_codegen;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(
            tauri_plugin_log::Builder::new()
                .with_colors(
                    ColoredLevelConfig::default()
                        .debug(Color::Green)
                        .info(Color::Cyan),
                )
                .target(tauri_plugin_log::Target::new(
                    tauri_plugin_log::TargetKind::Stdout,
                ))
                .build(),
        )
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(tauri_plugin_oauth::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_haptics::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            setup(app)
        })
        .invoke_handler(tauri::generate_handler![
            get_consent_url,
            get_profile,
            get_token,
            start_server,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
