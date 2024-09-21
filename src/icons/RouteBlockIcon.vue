
<template>
  <Icon :iconName="'route-block'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RouteBlockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'route-block'
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
