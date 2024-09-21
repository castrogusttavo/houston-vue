
<template>
  <Icon :iconName="'submarine'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SubmarineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'submarine'
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
