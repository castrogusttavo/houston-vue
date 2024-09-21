
<template>
  <Icon :iconName="'berlin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BerlinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'berlin'
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
