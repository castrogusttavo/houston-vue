
<template>
  <Icon :iconName="'row-insert'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RowInsertIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'row-insert'
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
