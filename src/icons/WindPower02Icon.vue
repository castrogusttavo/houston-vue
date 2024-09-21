
<template>
  <Icon :iconName="'wind-power-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindPower02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wind-power-02'
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
