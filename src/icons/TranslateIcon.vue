
<template>
  <Icon :iconName="'translate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TranslateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'translate'
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
