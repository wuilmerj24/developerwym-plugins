package developerwym.plugins.ns;
 
public class SpinnerDataFiles {
    private String id;
    public String file;
    private boolean isSelected;

    // Constructor
    public SpinnerDataFiles(String id, String file, boolean isSelected) {
        System.out.println("id: "+id);
        System.out.println("file: "+file);
        System.out.println("isSelected: "+isSelected);
        this.id = id;
        this.file = file;
        this.isSelected = isSelected;
    }

    // Getter para id
    public String getId() {
        return id;
    }

    // Setter para id
    public void setId(String id) {
        System.out.println("setId: "+id);
        this.id = id;
    }

    // Getter para file
    public String getFile() {
        return file;
    }

    // Setter para file
    public void setFile(String file) {
        System.out.println("setFile: "+file);
        this.file = file;
    }

    // Getter para isSelected
    public boolean isSelected() {
        return isSelected;
    }

    // Setter para isSelected
    public void setSelected(boolean selected) {
        System.out.println("setSelected: "+selected);
        isSelected = selected;
    }
}
