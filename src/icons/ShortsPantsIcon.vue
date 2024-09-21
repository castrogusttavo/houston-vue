
<template>
  <Icon :iconName="'shorts-pants'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShortsPantsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shorts-pants'
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
