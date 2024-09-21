
<template>
  <Icon :iconName="'tasbih'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TasbihIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tasbih'
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
