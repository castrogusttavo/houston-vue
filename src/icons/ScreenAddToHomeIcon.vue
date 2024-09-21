
<template>
  <Icon :iconName="'screen-add-to-home'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScreenAddToHomeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'screen-add-to-home'
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
