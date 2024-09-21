
<template>
  <Icon :iconName="'high-heels-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HighHeels02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'high-heels-02'
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
