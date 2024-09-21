
<template>
  <Icon :iconName="'school-bus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchoolBusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school-bus'
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
