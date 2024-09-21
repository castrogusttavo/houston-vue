
<template>
  <Icon :iconName="'xls-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Xls01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'xls-01'
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
