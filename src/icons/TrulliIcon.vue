
<template>
  <Icon :iconName="'trulli'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrulliIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trulli'
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
