use {
    log::{error, info},
    std::{path::PathBuf, sync::Arc},
    tauri::{App, AppHandle, Wry},
    tauri_plugin_store::{Error, Store, StoreExt},
    tsync::tsync,
};

/// Generate:
/// tsync -i src-tauri/src/ -o src/lib/crate/generated.ts

#[tsync]
pub const SETTINGS: &str = ".settings.dat";
#[tsync]
pub const K_HAPTIC_FEEDBACK: &str = "haptic_feedback";

#[tsync]
pub const DATA: &str = ".data.dat";
#[allow(dead_code)]
#[tsync]
pub const K_SAVED_RESTAURANTS: &str = "saved_restaurants";

pub fn setup_store(app: &App) -> Result<(), Box<dyn std::error::Error>> {
    match store_settings(app.handle()) {
        Ok(s) => {
            if let None = s.get(K_HAPTIC_FEEDBACK) {
                info!("Set up default haptic feedback.");
                s.set(K_HAPTIC_FEEDBACK, true);
            }
        }
        Err(e) => {
            error!("Error setting up store: {:?}.", e);
        }
    };
    match store_data(app.handle()) {
        Ok(_) => info!("Set up data store."),
        Err(e) => {
            error!("Error setting up data store: {:?}.", e);
        }
    };
    Ok(())
}

fn store_settings(app: &AppHandle) -> Result<Arc<Store<Wry>>, Error> {
    let path = PathBuf::from(SETTINGS);
    app.store(path.clone())
}

fn store_data(app: &AppHandle) -> Result<Arc<Store<Wry>>, Error> {
    let path = PathBuf::from(DATA);
    app.store(path.clone())
}
