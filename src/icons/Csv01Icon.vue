
<template>
  <Icon :iconName="'csv-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Csv01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'csv-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
