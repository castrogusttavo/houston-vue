
<template>
  <Icon :iconName="'scooter-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Scooter02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scooter-02'
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
