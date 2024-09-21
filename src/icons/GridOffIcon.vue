
<template>
  <Icon :iconName="'grid-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GridOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grid-off'
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
