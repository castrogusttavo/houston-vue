
<template>
  <Icon :iconName="'policy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PolicyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'policy'
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
