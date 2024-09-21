
<template>
  <Icon :iconName="'mochi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MochiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mochi'
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
