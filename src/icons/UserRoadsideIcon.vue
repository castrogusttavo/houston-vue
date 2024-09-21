
<template>
  <Icon :iconName="'user-roadside'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserRoadsideIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-roadside'
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
