
<template>
  <Icon :iconName="'crown'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CrownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crown'
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
