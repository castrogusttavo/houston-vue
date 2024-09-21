
<template>
  <Icon :iconName="'agreement-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Agreement02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'agreement-02'
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
