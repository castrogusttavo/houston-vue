
<template>
  <Icon :iconName="'oil-barrel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OilBarrelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'oil-barrel'
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
