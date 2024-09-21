
<template>
  <Icon :iconName="'cricket-helmet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CricketHelmetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cricket-helmet'
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
