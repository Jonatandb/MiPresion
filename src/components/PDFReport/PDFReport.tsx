import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { LogData } from "@/components/AddEditLog/AddEditLog";
import { getCategoryString } from "@/utils/getCategoryString";
import { formatToShortDateWithTimeString } from "@/utils/formatDateUtils";

import favicon120 from "@/assets/favicon_120x120.png"

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px 10px 100px 10px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  textSmall: {
    fontSize: 10,
  },
  textMedium: {
    fontSize: 12,
  },
  textNormal: {
    fontSize: 14,
  },
  textLarge: {
    fontSize: 16,
  },
  textXLarge: {
    fontSize: 24,
  },
  table: {
    display: "flex",
    width: "100%",
    padding: 5,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  marginTop10: {
    marginTop: 10,
  },
  borderGray: {
    border: "1px solid #555",
  },
});

const PDFReport = ({ logs }: { logs: LogData[] }) => {
  const tableTitle = `Reporte de mediciones - ${formatToShortDateWithTimeString()}`
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          <View fixed style={{ display: "flex", flexDirection: "column" }} id="header">
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                <Image src={favicon120} style={{ width: 40, height: 40, borderRadius: "25%", marginRight: "5px" }} />
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text style={styles.textXLarge}>MiPresión</Text>
                  <Text style={styles.textSmall}>Registro de Presión Sanguínea</Text>
                </View>
              </View>

              <View style={{ display: "flex", justifyContent: "flex-end", height: "100%" }}>
                <Text style={{ ...styles.textSmall }}>Desarrollado por Jonatandb@gmail.com</Text>
                <Text style={{ ...styles.textSmall, color: "#00F" }}>https://jonatandb.dev.ar/MiPresion</Text>
              </View>
            </View>

            <Text style={{ ...styles.textLarge, margin: "15px 0" }}>{tableTitle}</Text>
          </View>

          <View style={{ ...styles.table, ...styles.borderGray }}>
            <View style={{ ...styles.tableRow, width: "100%" }} id="tableHeader">
              <View style={{ width: "12%", textAlign: "left", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Fecha</Text>
              </View>
              <View style={{ width: "7%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Hora</Text>
              </View>
              <View style={{ width: "10%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Sistólica</Text>
              </View>
              <View style={{ width: "12%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Diastólica</Text>
              </View>
              <View style={{ width: "8%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Pulso</Text>
              </View>
              <View style={{ width: "12%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Medicina</Text>
              </View>
              <View style={{ width: "10%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Nivel</Text>
              </View>
              <View style={{ width: "29%", textAlign: "center", border: "1px solid #555" }}>
                <Text style={styles.textMedium}>Notas</Text>
              </View>
            </View>

            {
              logs.map(({ date, systolic, diastolic, pulse, medicine, notes }, index) => {
                const onlyDDMMYYYYDate = new Date(date).toLocaleDateString("es-ES").split("T")[0];
                const time = date.split("T")[1].substring(0, 5);
                const category = getCategoryString(systolic, diastolic);
                return (
                  <View key={index}>
                    <View wrap={false} style={{ ...styles.tableRow, width: "100%", backgroundColor: (index % 2 === 0) ? "#CCC" : "transparent" }}>
                      <View style={{ width: "12%", textAlign: "left" }}>
                        <Text style={styles.textMedium}>{onlyDDMMYYYYDate}</Text>
                      </View>
                      <View style={{ width: "7%", textAlign: "center" }}>
                        <Text style={styles.textMedium}>{time}</Text>
                      </View>
                      <View style={{ width: "10%", textAlign: "center" }}>
                        <Text style={styles.textMedium}>{systolic}</Text>
                      </View>
                      <View style={{ width: "12%", textAlign: "center" }}>
                        <Text style={styles.textMedium}>{diastolic}</Text>
                      </View>
                      <View style={{ width: "8%", textAlign: "center" }}>
                        <Text style={styles.textMedium}>{pulse}</Text>
                      </View>
                      <View style={{ width: "12%", textAlign: "center" }}>
                        <Text style={styles.textMedium}>{medicine ? "Si" : "No"}</Text>
                      </View>
                      <View style={{ width: "10%", textAlign: "center" }}>
                        <Text style={styles.textMedium}>{category}</Text>
                      </View>
                      <View style={{ width: "29%", textAlign: "left" }}>
                        <Text style={styles.textMedium}>{notes}</Text>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>

          <Text
            fixed
            style={{ ...styles.textSmall, ...styles.marginTop10, width: "100%", textAlign: "center" }}
            render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} />
        </View>

      </Page>
    </Document>
  )
}

export default PDFReport