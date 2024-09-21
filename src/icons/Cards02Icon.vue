
<template>
  <Icon :iconName="'cards-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cards02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cards-02'
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
