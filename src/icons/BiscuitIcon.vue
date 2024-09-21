
<template>
  <Icon :iconName="'biscuit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BiscuitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'biscuit'
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
