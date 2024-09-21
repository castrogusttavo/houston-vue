
<template>
  <Icon :iconName="'notion-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Notion02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notion-02'
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
