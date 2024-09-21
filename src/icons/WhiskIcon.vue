
<template>
  <Icon :iconName="'whisk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WhiskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'whisk'
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
