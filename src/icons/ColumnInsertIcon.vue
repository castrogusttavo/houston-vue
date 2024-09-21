
<template>
  <Icon :iconName="'column-insert'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ColumnInsertIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'column-insert'
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
