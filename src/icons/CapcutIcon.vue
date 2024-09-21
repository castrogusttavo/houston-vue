
<template>
  <Icon :iconName="'capcut'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CapcutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'capcut'
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
