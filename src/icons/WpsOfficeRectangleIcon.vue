
<template>
  <Icon :iconName="'wps-office-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WpsOfficeRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wps-office-rectangle'
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
