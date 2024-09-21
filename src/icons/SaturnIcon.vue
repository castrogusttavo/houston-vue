
<template>
  <Icon :iconName="'saturn'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaturnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'saturn'
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
