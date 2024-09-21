
<template>
  <Icon :iconName="'megaphone-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Megaphone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'megaphone-02'
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
