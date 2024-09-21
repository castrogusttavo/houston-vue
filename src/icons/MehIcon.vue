
<template>
  <Icon :iconName="'meh'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MehIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'meh'
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
