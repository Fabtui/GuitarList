# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_25_144619) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "guitars", force: :cascade do |t|
    t.string "brand"
    t.string "name"
    t.integer "year"
    t.integer "user_id"
    t.bigint "neck_pickup_id"
    t.bigint "center_pickup_id"
    t.bigint "bridge_pickup_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo_id"
    t.string "serial_number"
    t.string "made_in"
    t.string "color"
    t.string "body_wood"
    t.string "body_finish"
    t.string "neck_wood"
    t.string "body_top_wood"
    t.string "fingerboard_wood"
    t.string "bridge"
    t.float "scale_length"
    t.integer "frets_number"
    t.string "frets_type"
    t.string "neck_shape"
    t.float "neck_radius"
    t.integer "neck_width_nut"
    t.integer "neck_width_last_fret"
    t.string "neck_finish"
    t.string "neck_attachment"
    t.string "nut_material"
    t.string "tuning_machines"
    t.string "inlays"
    t.string "pickups_configuration"
    t.string "artist"
    t.integer "price"
    t.integer "purchase_date"
    t.text "photos_ids", default: [], array: true
    t.index ["bridge_pickup_id"], name: "index_guitars_on_bridge_pickup_id"
    t.index ["center_pickup_id"], name: "index_guitars_on_center_pickup_id"
    t.index ["neck_pickup_id"], name: "index_guitars_on_neck_pickup_id"
  end

  create_table "pickups", force: :cascade do |t|
    t.string "brand"
    t.string "name"
    t.string "product_name"
    t.integer "output"
    t.float "resistance"
    t.float "bass"
    t.float "low_middle"
    t.float "high_middle"
    t.float "treble"
    t.string "pickup_type"
    t.string "magnet"
    t.boolean "active"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "guitars", "pickups", column: "bridge_pickup_id"
  add_foreign_key "guitars", "pickups", column: "center_pickup_id"
  add_foreign_key "guitars", "pickups", column: "neck_pickup_id"
end
