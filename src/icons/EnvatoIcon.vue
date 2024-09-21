
<template>
  <Icon :iconName="'envato'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EnvatoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'envato'
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
