use {
    crate::setup::store::setup_store,
    log::info,
    tauri::{App, Manager},
};

pub(crate) mod command_start_server;
mod store;

pub(crate) fn setup(app: &App) -> Result<(), Box<dyn std::error::Error>> {
    let app_data_dir = app
        .path()
        .app_local_data_dir()
        .expect("Could not resolve app local data path.");

    info!("App local data dir: {:?}", app_data_dir);
    setup_store(app)?;
    Ok(())
}
