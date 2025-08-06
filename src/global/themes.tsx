
export const themes = {
    colors: {
        primary: '#4A90E2',     
        accent: '#F5A623',      
        background: '#F7F8FA', 
        text: '#333333',         
        textSecondary: '#888888',
        white: '#FFFFFF',
        border: '#DDDDDD',
        success: '#28A745',
        error: '#DC3545',
    },

    spacing: {
        small: 8,
        medium_small:12,
        medium: 16,
        large: 24,
        xlarge: 32,
    },
    typography: {
        logoSize: 36,
        h1: 28,
        h2: 22,
        body: 16,
        label: 14,
        fontFamily: {
            bold: 'System',
            regular: 'System',
        }
    },
    radius: {
        small: 5,
        medium: 10,
    },


    
    // Chave separada para estilos de sombra
    shadows: {
        soft: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        medium: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
        }
    }
};