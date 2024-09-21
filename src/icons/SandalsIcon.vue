
<template>
  <Icon :iconName="'sandals'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SandalsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sandals'
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
