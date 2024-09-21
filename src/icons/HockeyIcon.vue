
<template>
  <Icon :iconName="'hockey'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HockeyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hockey'
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
