
<template>
  <Icon :iconName="'wps-office'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WpsOfficeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wps-office'
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
