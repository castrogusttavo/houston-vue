
<template>
  <Icon :iconName="'arrow-reload-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowReloadVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-reload-vertical'
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
