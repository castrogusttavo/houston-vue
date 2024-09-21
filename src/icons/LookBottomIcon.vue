
<template>
  <Icon :iconName="'look-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LookBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'look-bottom'
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
