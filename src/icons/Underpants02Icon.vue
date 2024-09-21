
<template>
  <Icon :iconName="'underpants-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Underpants02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'underpants-02'
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
