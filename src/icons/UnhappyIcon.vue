
<template>
  <Icon :iconName="'unhappy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UnhappyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unhappy'
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
